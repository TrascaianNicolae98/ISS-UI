import * as moment from 'moment/moment';

export class Conference {
  conferenceName: string;
  preliminaryPhaseDeadline: moment.Moment;
  firstPhaseDeadline: moment.Moment;
  secondPhaseDeadline: moment.Moment;
  thirdPhaseDeadline: moment.Moment;
  id: number;
}
