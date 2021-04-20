import { Migration } from '@mikro-orm/migrations';

export class Migration20210420200853 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" uuid not null, "email" varchar(255) not null, "username" varchar(255) not null, "address" varchar(255) not null, "is_deleted" bool not null, "is_email_verified" bool not null, "is_admin_user" bool not null, "last_login" timestamptz(0) not null);');
    this.addSql('alter table "user" add constraint "user_pkey" primary key ("id");');
  }

}
