import {Component} from 'angular2/core'
import {CourseService} from '../service/course.service'
import {AutoGrowDirective} from '../../auto_grow/directive/auto-grow.directive'
@Component({
    selector: 'courses',
    template: `
    {{title}}
    <input type="text" autoGrow />
    <ul>
    <li *ngFor="#course of courses">
        {{course}}
    </li>
    </ul>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CourseComponent {
    title = "The title of courses page :";
    courses;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}