const tf = require('@tensorflow/tfjs')
const tfnode = require('@tensorflow/tfjs-node')
const mobilenet = require('@tensorflow-models/mobilenet')

const fs = require('fs')

/*
https://towardsdatascience.com/image-object-detection-with-tensorflow-js-b8861119ed46
*/

const readImage = path => {
  const imageBuffer = fs.readFileSync(path)
  const tfimage = tfnode.node.decodeImage(imageBuffer)
  return tfimage
}

const imageClassification = async path => {
  const image = readImage(path)
  const mobilenetModel = await mobilenet.load()
  const predictions = await mobilenetModel.classify(image)
  console.log('Classification Results: ', predictions)
}

if (process.argv.length !== 3)
  throw new Error('Incorrect arguments: node classify.js <IMAGE_FILE>')

imageClassification(process.argv[2])


/*
const readImage = path => {
  const imageBuffer = fs.readFileSync(path)
  
  const tfimage = tfnode.node.decodeImage(imageBuffer)
  //const tfimage = tf.de
  return tfimage
}

class ObjectDetector {
  constructor(image) {
    this.inputImage = image;
  }

  async loadMobileNetModel() {
    const model = await mobilenet.load({
      version: 1,
      alpha: 0.25 | 0.50 | 0.75 | 1.0,
    })

    return model;
  }

}

test = readImage(process.argv[2])
console.log(test)
*/