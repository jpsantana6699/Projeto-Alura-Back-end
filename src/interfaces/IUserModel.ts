import IRoleModel from './IRoleModel';
import PermissionModel from '../models/PermissionModel';
import UserModel from '../models/UserModel';

interface IUserModel extends UserModel {
  roles: IRoleModel[],
  permissions: PermissionModel[]
}

export default IUserModel;
