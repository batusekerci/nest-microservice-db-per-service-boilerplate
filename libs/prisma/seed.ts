import { seedUsersDb } from './schema/users/seed';
import { seedDevicesDb } from './schema/devices/seed';
import { seedJobsDb } from './schema/jobs/seed';

export const seed = async () => {
  await Promise.all([seedUsersDb(), seedDevicesDb(), seedJobsDb()]);
};
seed();
