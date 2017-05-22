import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
          name: 'subjectFilter'
      })
export class SubjectFilterPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        return value.filter(
            course => {
                return course.subject.toLowerCase() === args.toLowerCase() || args === '';
            }
        );
    }

}
