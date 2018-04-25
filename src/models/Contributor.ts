import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class Contributor {

  @Expose()
  public id: number;

  @Expose()
  public login: string;

  @Expose()
  public avatar_url: string;

  @Expose()
  public html_url: string;

  @Expose()
  public contributions: number;

}
