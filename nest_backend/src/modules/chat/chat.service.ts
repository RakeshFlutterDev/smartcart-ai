import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class ChatService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async create(createChatDto: any) {
    return {
      success: true,
      userMessage: createChatDto.message,
      response:
        'Recommended: Chicken Biryani, Paneer Fried Rice, and Veg Meals under ₹300.',
    };
  }

  findAll() {
    return [];
  }

  findOne(id: number) {
    return {};
  }

  update(id: number, updateChatDto: any) {
    return {};
  }

  remove(id: number) {
    return {};
  }
}
