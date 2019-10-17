import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class RowDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Row(
      children: <Widget>[
        const FlutterLogo(),
        const Text('Hello World'),
        const Icon(Icons.sentiment_very_satisfied),
      ],
    );
  }
}
