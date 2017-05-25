import {AfterViewInit, Component, Inject, OnInit} from "@angular/core";
import {Class} from "./class";

@Component({
               selector: 'app-course-list',
               templateUrl: './course-list.component.html',
               styleUrls: ['./course-list.component.css'],
               providers: [
                   {provide: Window, useValue: window}
               ],
           })
export class CourseListComponent implements OnInit, AfterViewInit {
    classes: Class[];
    searchClasses = '';
    searchSubject = '';
    subjects: string[];
    classDetails: {
        name: string,
        description: string,
        startDate: string,
        subject: string
    };

    constructor(@Inject(Window) private windowRef: Window) {
        this.classDetails = {
            name: '',
            description: '',
            startDate: '',
            subject: ''
        };
    }

    ngOnInit() {
        this.classes = [
            new Class('Analysis', 'Reading and Writing', new Date('May 12, 2017 14:15:00'),
                      'Learn how to apply critical thinking skills to better understand everything you read'
            ),
            new Class(
                'Grammar', 'Reading and Writing', new Date('May 12, 2017 15:12:00'),
                'Learn the rules to write formally and properly in an appropriate setting.'
            ),
            new Class(
                'Fractions and Ratios', 'Math', new Date('May 12, 2017 17:00:00'),
                'Learn how to use fractions and ratios to calculate proportions'
            ),
            new Class(
                'Functions 1', 'Math', new Date('May 24 2017, 20:00:00'),
                'Learn about variables and get started with Algebra 1'
            ),
            new Class(
                'Learning to Learn 2', 'Electives', new Date('May 19, 2017 23:00:00'),
                'Learn about the strategies to help you get better at learning (like the growth mindset)'
            ),
            new Class(
                'Science', 'Electives', new Date('May 30, 2017 05:00:00'),
                'Check out our first science class where we will look at the HiSET Science section and strategies to prepare'
            ),
        ];
        this.subjects = this.getUniqueSubjects();

    }

    ngAfterViewInit() {
        $('.closebtn-modal').click(
            function () {
                $('.modal-backdrop').remove();
            }
        );
    }

    modalButtonClick(id: number) {
        this.updateClassDetails(id);
        $('#classDetailModal').before('<div id="backdrop"></div>');
        $('#backdrop').addClass('modal-backdrop').addClass('show').addClass('fade');
        $('#classDetailModal').modal({show: true});


    }

    getUniqueSubjects() {
        const subjects = [];
        for (const c of this.classes) {
            if (subjects.indexOf(c.subject) === -1) {
                subjects.push(c.subject);
            }
        }
        return subjects;
    }

    updateClassDetails(id: number) {
        this.classDetails.name = this.classes[id].name;
        this.classDetails.description = this.classes[id].description;
        this.classDetails.startDate = this.classes[id].startDate.toDateString();
        this.classDetails.subject = this.classes[id].subject;
    }


}
