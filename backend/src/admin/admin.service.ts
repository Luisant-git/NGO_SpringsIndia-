import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import { CreateAdminDto } from './dto/create-admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Injectable()
export class AdminService {
  private prisma = new PrismaClient();

  async register(createAdminDto: CreateAdminDto) {
    const existingAdmin = await this.prisma.admin.findUnique({
      where: { email: createAdminDto.email }
    });

    if (existingAdmin) {
      throw new ConflictException('Admin already exists');
    }

    const hashedPassword = await bcrypt.hash(createAdminDto.password, 10);
    
    const admin = await this.prisma.admin.create({
      data: {
        email: createAdminDto.email,
        password: hashedPassword
      },
      select: { id: true, email: true, isActive: true, createdAt: true }
    });

    return admin;
  }

  async login(loginAdminDto: LoginAdminDto) {
    const admin = await this.prisma.admin.findUnique({
      where: { email: loginAdminDto.email }
    });

    if (!admin || !admin.isActive) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(loginAdminDto.password, admin.password);
    
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return { id: admin.id, email: admin.email, isActive: admin.isActive };
  }

  findAll() {
    return this.prisma.admin.findMany({
      select: { id: true, email: true, isActive: true, createdAt: true }
    });
  }

  findOne(id: number) {
    return this.prisma.admin.findUnique({
      where: { id },
      select: { id: true, email: true, isActive: true, createdAt: true }
    });
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return this.prisma.admin.update({
      where: { id },
      data: updateAdminDto,
      select: { id: true, email: true, isActive: true, updatedAt: true }
    });
  }

  remove(id: number) {
    return this.prisma.admin.delete({ where: { id } });
  }
}