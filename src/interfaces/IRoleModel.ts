import PermissionModel from '../models/PermissionModel';
import RoleModel from '../models/RoleModel';

interface IRoleModel extends RoleModel {
  permissions: PermissionModel[];
}

export default IRoleModel;
