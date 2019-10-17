import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:vtah_flutter_intro/examples/Frog.ctt.dart';

import 'FrogColor.ctt.dart';

class FrogColorDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return FrogColor(color: Colors.blueAccent, child: FrogColorDemoState());
  }
}

class FrogColorDemoState extends StatefulWidget {
  @override
  _FrogColorDemoStateState createState() => _FrogColorDemoStateState();
}

class _FrogColorDemoStateState extends State<FrogColorDemoState> {
  @override
  Widget build(BuildContext context) {
    return Frog(color: FrogColor.of(context).color, child: Text("I am a frog"));
  }
}
