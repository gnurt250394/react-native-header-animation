import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';

class HeaderAnimation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.scroll = new Animated.Value(0)
        this.headerY = Animated.multiply(Animated.diffClamp(this.scroll, 0, this.props.height), -1);
    }
  
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Animated.View style={{
                    backgroundColor: 'red', transform: [{
                        translateY: this.headerY
                    }], height: this.props.height, position: 'absolute', width: '100%',
                }}>
                   {this.props.renderHeader()}
                </Animated.View>
                <Animated.ScrollView
                    scrollEventThrottle={1}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    style={{ zIndex: 0, height: "100%", elevation: -1 }}
                    contentContainerStyle={{ paddingTop: this.props.height }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.scroll } } }],
                        { useNativeDriver: true },
                    )}
                    overScrollMode="never"
                >
                    <View style={{ flex: 1 }}>
                        {this.props.children}
                    </View>
                </Animated.ScrollView>
            </View>
        );
    }
}

export default HeaderAnimation;
