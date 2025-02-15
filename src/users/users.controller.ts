import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './DTO/create-user.dto';
import { UpdateUserDTO } from './DTO/update-user.dto';


@Controller('users')
export class UsersController {    
    constructor(private readonly usersService : UsersService) {}

    @Get() // GET /users or /users?role=value
    findAll(@Query('role') role ?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        return this.usersService.findAll(role)
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id', ParseIntPipe) id : number) {
        return this.usersService.findOne(id)
    }

    @Post() // POST /users
    create(@Body(ValidationPipe) createUserDTO : CreateUserDTO) {
        return this.usersService.create(createUserDTO)
    }

    @Patch(':id') // PATCH /users/:id
    update(@Param('id', ParseIntPipe) id : number, @Body(ValidationPipe) updateUserDTO : UpdateUserDTO) {
        return this.usersService.update(id, updateUserDTO)
    }

    @Delete(':id') // DELETE /users/:id
    delete(@Param('id', ParseIntPipe) id : number) {
        return this.usersService.delete(id)
    }
}
