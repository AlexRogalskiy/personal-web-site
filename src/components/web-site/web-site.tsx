import { Component } from '@stencil/core';


@Component({
    tag: 'web-site',
    styleUrl: 'web-site.scss'
})
export class WebSite {

    render() {
        return [
            <web-header></web-header>,
            <h1 class="section-title">About me</h1>,
            <my-info></my-info>,
            <h1 class="section-title">Portfolio</h1>,
            <my-projects></my-projects>,
            <h1 class="section-title">Work Experience</h1>,
            <my-experience></my-experience>,
            <h1 class="section-title">Hobbies</h1>,
            <my-hobbies></my-hobbies>,
            <web-footer></web-footer>
        ];
    }
}