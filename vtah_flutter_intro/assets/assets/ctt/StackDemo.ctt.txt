import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class StackDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Stack(
      alignment: Alignment.center,
      children: <Widget>[
        Container(
          height: 200,
          width: 200,
          color: Colors.red,
        ),
        FlutterLogo()
      ],
    );
  }
}
