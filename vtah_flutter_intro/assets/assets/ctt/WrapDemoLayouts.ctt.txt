import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:vtah_flutter_intro/examples/WrapDemo.ctt.dart';

class WrapDemoLayouts extends StatefulWidget {
  @override
  _WrapDemoLayoutsState createState() => _WrapDemoLayoutsState();
}

class _WrapDemoLayoutsState extends State<WrapDemoLayouts> {
  double _ratio = 1.0;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Slider(
          min: 0.0,
          max: 3.0,
          value: _ratio,
          onChanged: (ratio) => setState(() => _ratio = ratio),
        ),
        WrapDemo(size: Size(100 * _ratio, 100 * _ratio))
      ],
    );
  }
}
