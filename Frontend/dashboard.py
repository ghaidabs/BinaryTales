import pandas as pd
import dash
from dash import html, dcc 
import plotly.express as px

#reading the dataset
books=pd.read_csv("books.csv")

custom_palette=['#96B6C5','#ADC4CE','#EEE0C9','#F1F0E8']

#creating dash app
app=dash.Dash(__name__)

#defining app laytout
app.layout = html.Div(
    children=[
        #TOP 10 BOOKS ACCORDING TO RATING
        html.Div(
            dcc.Graph(
                figure=px.bar(books.nlargest(10, 'Rating').iloc[::-1], x='Rating', y='Book_title', orientation='h', title='TOP 10 BOOKS ACCORDING TO RATING', 
                                labels={'Rating': '', 'Book_title': ''}, #removing labels for x and y axes
                                color='Rating',
                                color_continuous_scale=[(0,'#EEE0C9'),(0.5,'#ADC4CE'),(1,'#96B6C5')]
                            ).update_xaxes(
                                tickvals=[] #removing the rating on the x axis
                            ).update_traces( #setting hover text to display type and price of the book
                                textposition='none',
                                hovertemplate='<b>Type:</b> %{customdata}<br><b>Price:</b> $%{text:.2f}', 
                                customdata=(books.nlargest(10, 'Rating')).iloc[::-1]['Type'],
                                text=(books.nlargest(10, 'Rating')).iloc[::-1]['Price']
                            ).update_layout(
                                font=dict(family='Georgia', size=15),
                                title=dict(x=0.5, font=dict(size=25, color='#102C57'))
                ),
                config={'displayModeBar': False}
            ),
            style={'display': 'inline-block', 'width': '65%'}
        ),
        #DISTRIBUTION OF BOOKS TYPES
        html.Div(
            dcc.Graph(
                figure=px.pie(books, names='Type', title='DISTRIBUTION OF BOOKS TYPES', color_discrete_sequence=custom_palette, hover_data={'Type': False} 
                ).update_layout(
                    font=dict(family='Georgia',size=15),
                    title=dict(x=0.5,font=dict(size=25,color='#102C57'))
                ),
                config = {'displayModeBar': False}    
            ),
            style={'display': 'inline-block', 'width': '35%'}
        )
    ]
)

if (__name__ == "__main__"):
    app.run_server(debug=False)
