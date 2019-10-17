import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class FlexDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        width: 120,
        height: 64,
        decoration: BoxDecoration(
            border: Border.all(color: Colors.deepPurple, width: 1.0)),
        child: Flex(
          direction: Axis.horizontal,
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Container(
              width: 32,
              height: 32,
              color: Colors.red,
            ),
            Container(
              width: 48,
              height: 48,
              color: Colors.blue,
            ),
            Container(
              width: 12,
              height: 12,
              color: Colors.green,
            )
          ],
        ));
  }
}
