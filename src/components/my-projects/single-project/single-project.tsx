import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'single-project',
    styleUrl: 'single-project.scss'
})
export class SingleProject {

    @Prop() project;

    render() {
        if (this.project){
            let tags = [];
            this.project.tags.forEach(tag => {
                tags.push(
                    <tech-chip tag={tag}></tech-chip>
                );
            });
            return (
                <div class="card">
                    <div class="container">
                        <div class="title">
                            <p>{this.project.title}</p>
                            <div class="code">
                                <label>Code</label>
                                <a target="_blank" href={this.project.more}>
                                    <i class="fa fa-github" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                        <div class="description">
                            <p>{this.project.description}</p>
                        </div>
                        <div class="tags">
                            {tags}
                        </div>
                    </div>
                </div>
            );
        }
    }
}