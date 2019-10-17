import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class WrapDemo extends StatelessWidget {
  const WrapDemo({@required this.size});

  final Size size;

  @override
  Widget build(BuildContext context) {
    return Container(
        width: size.width,
        height: size.height,
        decoration: BoxDecoration(
            border: Border.all(color: Colors.deepPurple, width: 1.0)),
        child: Wrap(
          direction: Axis.horizontal,
          alignment: WrapAlignment.start,
          runAlignment: WrapAlignment.start,
          crossAxisAlignment: WrapCrossAlignment.start,
          children: <Widget>[
            Container(
              width: 128,
              height: 128,
              color: Colors.red,
            ),
            Container(
              width: 64,
              height: 64,
              color: Colors.orange,
            ),
            Container(
              width: 32,
              height: 32,
              color: Colors.green,
            ),
          ],
        ));
  }
}
