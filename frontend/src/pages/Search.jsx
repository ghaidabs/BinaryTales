import React, { useEffect , useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Card from './Card/Card';


const Search = (props) => {
        if (props.data){
            console.log(" resultat");
            return(
                <div style={{height:'60px'}}>
                    <Card data={props.data} />
                </div>
            );
        }else{
            console.log("pas de resultat");
            return(
                <div>
                    <ErrorPage />
                </div>
                
            );
        }

    
}

export default Search;