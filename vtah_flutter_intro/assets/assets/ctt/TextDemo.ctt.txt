import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class TextDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Wrap(
      direction: Axis.vertical,
      children: <Widget>[
        Text("Hello World"),
        Text("Hello World",
            style: TextStyle(color: Colors.red, fontWeight: FontWeight.bold)),
        Text.rich(TextSpan(text: 'Hello', children: <TextSpan>[
          TextSpan(
              text: ' beautiful ',
              style: TextStyle(fontStyle: FontStyle.italic)),
          TextSpan(
              text: 'world', style: TextStyle(fontWeight: FontWeight.bold)),
        ])),
      ],
    );
  }
}
