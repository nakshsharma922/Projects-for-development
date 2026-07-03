import numpy as np
from tensorflow.keras.preprocessing import image
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.models import load_model
import gradio as gr
from PIL import Image 

model = load_model('mask_model.keras')
path = "Test"

def work(images):
    im = image.load_img(images, target_size = (200,200))
    x = image.img_to_array(im)
    x = np.expand_dims(x, axis = 0)
    pic = np.vstack([x])
    val = model.predict(pic)
    if val[0][0] < 0.5:
        return "masked"
    else:
        return "unmasked"

css = """
img {
    max-width: 400px ;
    max-height: 400px ;
}
"""

demo = gr.Interface(fn = work, 
                    inputs = gr.Image(type = "filepath"), 
                    outputs = ["text"], 
                    title = "Mask Detection", 
                    description = "Upload an image to detect if the person is wearing a mask or not.",
                    css = css
                    )
demo.launch(share = True)