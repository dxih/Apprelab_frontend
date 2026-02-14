import { formatDistanceToNow } from 'date-fns';

export const getTimeAgo = (date: Date | number) => {
  return formatDistanceToNow(date, { addSuffix: true });
};