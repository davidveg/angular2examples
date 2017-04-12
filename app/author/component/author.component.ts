import {Component} from 'angular2/core'
import {AuthorService} from '../service/author.service'
import {AutoGrowDirective} from "../../auto_grow/directive/auto-grow.directive"
@Component({
    selector : 'authors',
    template : `
    {{title}}
    <input type="text" autoGrow />
    <ul>
        <li *ngFor="#author of authors">
            {{author}}
    </li>
    </ul>
    `,
    providers: [AuthorService],
    directives: [AutoGrowDirective]
})
export class AuthorComponent {
    title = "Title for authors page : "
    authors;

    constructor(authorService : AuthorService) {
        this.authors = authorService.getAuthors();
    }
}