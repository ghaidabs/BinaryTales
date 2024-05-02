import pandas as pd
import dash
from dash import html, dcc 
import plotly.express as px
import plotly.graph_objects as go

books = pd.read_csv("books.csv")

price_by_type = books.groupby('Type')['Price'].median().reset_index()

custom_palette=['#8E806A','#A79277',"#BEA474",'#C3B091','#E4CDA7','#EEE0C9']

app = dash.Dash(__name__)

app.layout = html.Div(
    children=[
        html.Div(
            children=[
                html.H2("TOP 10 BOOKS ACCORDING TO RATING", style={'text-align': 'center', 'color': '#635147'}),
                html.Div(
                    children=[
                        html.P(
                            book['Book_title'],
                            style={'margin-bottom': '5px'}
                        )
                        for i, (index, book) in enumerate(books.nlargest(10, 'Rating').iterrows())
                    ],
                    style={'text-align': 'center','width': '100%', 'margin': 'auto'}
                )
            ],
            style={'width': '51%', 'display': 'inline-block', 'vertical-align': 'top'}
        ),html.Div(
            children=[
                html.H2("MEDIAN PRICE BY BOOK TYPE", style={'text-align': 'center', 'color': '#635147'}),
                dcc.Graph(
                    id='price-by-type-graph',
                    figure=px.bar(price_by_type, x='Price', y='Type',
                    template='plotly_white',
                    color='Type',
                    labels={'Type': '', 'Price': ''}, 
                    color_discrete_sequence=custom_palette),
                    config={'displayModeBar': False}, 
                )
            ],
            style={'width': '49%', 'display': 'inline-block', 'vertical-align': 'top'}
        )
    ],
    style={'font-family': 'Sans-serif', 'font-size':'20px'}
)
@app.callback(
    dash.dependencies.Output('price-by-type-graph', 'figure'),
    [dash.dependencies.Input('price-by-type-graph', 'figure')]
)
def update_layout(figure):
    for trace in figure['data']:
        trace['hovertemplate'] = '%{x:.2f} $'
    figure['layout']['yaxis']['tickvals'] = []
    figure['layout']['yaxis']['categoryorder'] = 'total descending'
    figure['layout']['legend'] = {
        'orientation': 'v',
        'x': 1, 
        'y': 1, 
        'xanchor': 'right',  
        'yanchor': 'buttom', 
        'traceorder': 'normal',  
        'bgcolor': 'rgba(255, 255, 255, 0.5)',  
        'borderwidth': 1 
    }
    figure['layout']['font'] = {'color': 'black'} 
    figure['layout']['height'] = 500
    figure['layout']['width'] = 999

    return figure


if __name__ == "__main__":
    app.run_server(debug=False)
