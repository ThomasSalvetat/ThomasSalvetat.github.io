import 'package:flutter/material.dart';
import 'package:vtah_flutter_intro/examples/Frog.ctt.dart';

class FrogDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Frog(color: Colors.red, child: Text("I am a frog."));
  }
}
