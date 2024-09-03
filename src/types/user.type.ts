export default interface IUser {
  id?: any | null;
  name?: string | null;
  email?: string;
  password?: string;
  roles?: Array<string>;
}
