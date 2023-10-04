import './Schedule.scss';

export const Schedule = () => {
  return (
    <div className="schedule">
      <div className="schedule__title">SCHEDULE</div>

      <time dateTime="2016-11-25">25 Nov 2016</time>
      <p>Vestibulum viverra</p>

      <time dateTime="2016-11-28">28 Nov 2016</time>
      <p>Vestibulum viverra</p>

      <time className="schedule__penultimate-elem" dateTime="2016-12-18">
        18 Dec 2016
      </time>
      <p className="schedule__penultimate-elem">Vestibulum viverra</p>

      <time className="schedule__last-elem" dateTime="2017-01-07">
        07 Jan 2017
      </time>
      <p className="schedule__last-elem">Vestibulum viverra</p>
    </div>
  );
};
