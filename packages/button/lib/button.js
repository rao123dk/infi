'use strict';

// module.exports = button;

// function button() {
//     // TODO
// }


import * as React from "react";
import './styles.scss';


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
    constructor(props){
        super(props);
    }
    renderIcon = (inverse) => {
        const {icon, title} = this.props;
        if(inverse){
            return(
                <>
                    {icon}
                    {title}
                </>
            );
        }

        return(
            <>
                {title}
                {icon}
            </>
        )
    };

    render(){
        const {
            hrefLink,
            type,
            styleClass,
            onButtonClick,
            onButtonOver,
            title,
            isDisabled,
            icon,
            target,
            iconSide
           } = this.props;

        const redirectLink = (hrefLink === "" || hrefLink == null || hrefLink == undefined) ? "javascript:void(0)" : hrefLink
        return(
            <this.props.type
                href={redirectLink}
                className={`infinity-button ${styleClass} ${isDisabled ? 'ButtonDisabled':null}`}
                onClick={onButtonClick}
                onmouseover={onButtonOver}
                disabled={isDisabled}
                target ={target}
            >
            {
                (iconSide && iconSide.toLowerCase() == 'left') ? this.renderIcon(true):this.renderIcon()
            }
            </this.props.type>
        )
    }
}

