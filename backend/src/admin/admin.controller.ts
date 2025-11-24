import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Res, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import type { Response, Request } from 'express';
import * as jwt from 'jsonwebtoken';

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
  async login(@Body() loginAdminDto: LoginAdminDto) {
    const admin = await this.adminService.login(loginAdminDto);
    
    const token = jwt.sign(
      { adminId: admin.id, email: admin.email },
      process.env.SESSION_SECRET || 'springs-india-secret-key-fallback',
      { expiresIn: '24h' }
    );
    
    console.log(`Admin logged in: ${admin.email} (ID: ${admin.id})`);
    return { message: 'Login successful', admin, token };
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Logout admin' })
  @ApiResponse({ status: 200, description: 'Logout successful' })
  logout() {
    return { message: 'Logout successful' };
  }

  @Get('profile')
  @ApiOperation({ summary: 'Get admin profile' })
  @ApiResponse({ status: 200, description: 'Admin profile retrieved' })
  getProfile(@Req() req: any) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.substring(7) : null;
    
    if (!token) {
      return { message: 'Not authenticated' };
    }
    
    try {
      const decoded = jwt.verify(token, process.env.SESSION_SECRET || 'springs-india-secret-key-fallback') as any;
      console.log(`Profile accessed by: ${decoded.email} (ID: ${decoded.adminId})`);
      return this.adminService.findOne(decoded.adminId);
    } catch (error) {
      return { message: 'Not authenticated' };
    }
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