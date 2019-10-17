import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class PaddingDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.red,
      child: Padding(
          padding: EdgeInsets.symmetric(vertical: 32, horizontal: 16),
          child: Container(height: 32, width: 32, color: Colors.blueAccent)),
    );
  }
}
