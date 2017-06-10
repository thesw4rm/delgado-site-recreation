import {Pipe, PipeTransform} from "@angular/core";
import {Class} from "../class";

@Pipe({
          name: 'courseFilter'
      })
export class CourseFilterPipe implements PipeTransform {

    transform(value: Class[], args?: string): any {
        if (!value) {
            return [];
        }
        return value.filter(
            course => {
                return course.name.toLowerCase().includes(args.toLowerCase());
            }
        );
    }

}
