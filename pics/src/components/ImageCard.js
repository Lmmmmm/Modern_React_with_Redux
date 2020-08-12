import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {spans: 0};
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    // image right here successfully loads up or downloads an image from the internet and displays on the screen it emits this load event.
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    // allocate ${span} cells worth for image. 
    const spans = Math.ceil(height / 10); //+1是为了确保spans能完整放下一张图

    this.setState({spans});
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}> 
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}
export default ImageCard;
