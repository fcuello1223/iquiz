import moment from 'moment';

export const formatTime = (date: Date) => {
  return moment(date).format('dddd, MMMM Do YYYY, h:mm A');
}
