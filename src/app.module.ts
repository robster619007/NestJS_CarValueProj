import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ReportsModule } from './reports/reports.module';
// import { Users } from './user/user.entity';
// import { Report } from './reports/reports.entity'

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'carvalue',
    // entities: [Users,Report],
    synchronize: true,
    autoLoadEntities: true,
    retryAttempts: 20,
  }),UserModule, ReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
