import { Controller, Get, Post, Body, Patch, Param, Delete, Session, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@ApiTags('admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register new admin' })
  @ApiResponse({ status: 201, description: 'Admin registered successfully' })
  async register(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.register(createAdminDto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login admin' })
  @ApiResponse({ status: 200, description: 'Login successful' })
  async login(@Body() loginAdminDto: LoginAdminDto, @Session() session: any) {
    const admin = await this.adminService.login(loginAdminDto);
    session.adminId = admin.id;
    session.adminEmail = admin.email;
    console.log(`Admin logged in: ${admin.email} (ID: ${admin.id})`);
    return { message: 'Login successful', admin };
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Logout admin' })
  @ApiResponse({ status: 200, description: 'Logout successful' })
  logout(@Session() session: any) {
    console.log(`Admin logged out: ${session.adminEmail} (ID: ${session.adminId})`);
    session.destroy();
    return { message: 'Logout successful' };
  }

  @Get('profile')
  @ApiOperation({ summary: 'Get admin profile' })
  @ApiResponse({ status: 200, description: 'Admin profile retrieved' })
  getProfile(@Session() session: any) {
    if (!session.adminId) {
      return { message: 'Not authenticated' };
    }
    console.log(`Profile accessed by: ${session.adminEmail} (ID: ${session.adminId})`);
    return this.adminService.findOne(session.adminId);
  }

  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}