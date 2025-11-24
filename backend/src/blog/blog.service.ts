import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async create(createBlogDto: CreateBlogDto, file: Express.Multer.File) {
    const imageUrl = file ? `/uploads/${file.filename}` : '';
    
    return this.prisma.blog.create({
      data: {
        ...createBlogDto,
        image: imageUrl,
        publishedAt: createBlogDto.published ? new Date() : null,
      },
    });
  }

  async findAll(publishedOnly = true) {
    return this.prisma.blog.findMany({
      where: publishedOnly ? { published: true } : {},
      orderBy: { publishedAt: 'desc' },
    });
  }

  async findAllAdmin() {
    return this.prisma.blog.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const blog = await this.prisma.blog.findUnique({
      where: { id },
    });

    if (!blog) {
      throw new NotFoundException(`Blog with ID ${id} not found`);
    }

    return blog;
  }

  async update(id: number, updateBlogDto: UpdateBlogDto, file?: Express.Multer.File) {
    const existingBlog = await this.findOne(id);
    
    let imageUrl = existingBlog.image;
    if (file) {
      imageUrl = `/uploads/${file.filename}`;
    }

    return this.prisma.blog.update({
      where: { id },
      data: {
        ...updateBlogDto,
        image: imageUrl,
        publishedAt: updateBlogDto.published ? (existingBlog.publishedAt || new Date()) : null,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.blog.delete({
      where: { id },
    });
  }
}