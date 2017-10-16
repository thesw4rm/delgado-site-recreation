import {AfterViewInit, Component, OnInit} from "@angular/core";
import {Class} from "./class";
import {ClassesCourseListService} from "./services/classes-course-list.service";

@Component({
               selector: 'app-course-list',
               templateUrl: './course-list.component.html',
               styleUrls: ['./course-list.component.css'],
               providers: [
                   ClassesCourseListService
               ],
           })
export class CourseListComponent implements OnInit, AfterViewInit {
    classes: Class[];
    searchClasses: string;
    searchSubject: string;
    subjects: string[];
    classDetails: {
        name: string,
        description: string,
        subject: string,
        img: string,
        objectives: string[]
    };

    windowRef: any;

    constructor(private classService: ClassesCourseListService) {
        this.classDetails = {
            name: '',
            description: '',
            subject: '',
            img: '',
            objectives: []
        };
        this.windowRef = window;

    }

    ngOnInit() {


        this.classService.getClasses().subscribe(
            (classList) => {
                this.classes = classList;
                let index = 0;
                for (let i in this.classes) {
                    this.classes[i]['index'] = index;
                    index++;
                }
                this.subjects = this.getUniqueSubjects();
                $('.closebtn-modal').click(
                    function () {
                        $('.modal-backdrop').remove();
                    }
                );

                $(document).keyup(
                    function (e) {
                        if (e.keyCode === 27) {
                            $('.modal-backdrop').remove();
                        }
                    });
                this.searchClasses = '';
                this.searchSubject = '';
            }, //Response callback

            (error) => {
                console.log(error);
            }, //Error callback

            () => {

            } //Complete callback
        );


    }

    ngAfterViewInit() {

    }

    modalButtonClick(id: number) {
        this.updateClassDetails(id);
        $('#classDetailModal').before('<div id="backdrop"></div>');
        $('#backdrop').addClass('modal-backdrop').addClass('show').addClass('fade');
        $('#classDetailModal').modal({show: true});


    }

    getUniqueSubjects() {
        const subjects = [];
        subjects.push('All');
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
        this.classDetails.subject = this.classes[id].subject;
        this.classDetails.img = this.classes[id].img;
        this.classDetails.objectives = this.classes[id].objs.split(";");
    }


}
