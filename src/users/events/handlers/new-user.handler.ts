
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { NewUserEvent } from '@src/users/events/impl/new-user.event';

@EventsHandler(NewUserEvent)
export class NewUserHandler implements IEventHandler<NewUserEvent> {
  handle(event: NewUserEvent) {
    console.log(clc.yellowBright(`
    ${clc.bgRed('New user')}
    ${clc.green('Name :')} ${event.user.name} 
    ${clc.green('Phone :')} ${event.user.phone} 
    ${clc.green('Email :')} ${event.user.email} 
    `));
  }
}