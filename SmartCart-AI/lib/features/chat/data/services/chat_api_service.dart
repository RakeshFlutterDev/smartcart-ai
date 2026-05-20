import 'package:dio/dio.dart';

class ChatApiService {
  final Dio _dio = Dio(
    BaseOptions(
      baseUrl: 'http://10.0.2.2:3000',
    ),
  );

  Future<String> sendMessage(String message) async {
    final response = await _dio.post('/chat', data: {'message': message});
    return response.data['response'];
  }
}