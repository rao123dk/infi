'use strict';

// module.exports = button;

// function button() {
//     // TODO
// }


import * as React from "react";



/*
@title - Button label
@type - its tag type(a,button)
@styleClass - proved your own class name
@href - for redirect you can pass your link
@icon - its component to insert in buuton label
@onButtonClick - do some action on button click
@onmouseover - do some action on button hover
@isDisabled - disable button on the basisof props

@target - if type is a tag

@iconSide - left or right
*/

export default class button extends React.Component {
    render(){
        return(
           <button>{'hello button NPM'}</button>
        )
    }
}

