import { Component } from "react";
import { SectionStyled } from "./Section.styled";
import PropTypes from 'prop-types';



export class Section extends Component {
    render() {
        return (
            <SectionStyled>
                <h2>{this.props.title}</h2>
                <div>{this.props.children}</div>
            </SectionStyled>
        );
    }
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object,
}