import {
    
  } from '@chakra-ui/react';
import React, {Component} from 'react';
import { useState } from 'react';
import axios from 'axios';

class League extends Component {
    options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
        params: {
            //season : 2022,
            //search : 'turkey'
            //code: 'NL'
            id: this.props.leagueID
        },
        headers: {
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '91eeb26ed8msh8447d341df76518p1a7653jsna3db505351af'
        }
    }

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          league: {}
        };
    }

    componentDidMount(){
        axios.request(this.options).then((response) => {
            this.setState({
                league:response.data,
                error: false
            })
            console.log(response.data);
            console.log(response.status);
        }
        ).catch(function (error) {
            this.error=true;
            console.error(error);
        });
    }

    render() {
        const {league} = this.state
        if(typeof league['response'] !== 'undefined') {
            return (
                <div>
                    Name : {league['response'][0]['league']['name']}
                    <br/>
                    Logo : {league['response'][0]['league']['logo']}
                    <br/>
                </div>
            );
        }
        return null;
    }
}

export default League;