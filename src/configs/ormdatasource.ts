// Packages
import { DataSource } from 'typeorm';
// Configs
import ormConfig from './orm.config';

export default new DataSource(ormConfig.getTypeormConfig());
