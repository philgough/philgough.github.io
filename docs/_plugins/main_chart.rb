## Liquid tag 'mainchart' used to add image data that fits 
## in the right margin column area of the layout
## Usage {% mainchart 'margin-id-whatever' 'path/to/image' 'This is the caption' %}
#
module Jekyll
  class RenderMainChartTag < Liquid::Tag

  	require "shellwords"

    def initialize(tag_name, text, tokens)
      super
      @text = text.shellsplit
    end

    def render(context)
      "<div class='mainsvg'>
      <svg id='#{@text[0]}'></svg>
      <p class='svghover' id='#{@text[0]}-hover'></p>
      <p class=svgcaption>#{@text[1]}</p>
      </div>"
    end
  end
end

Liquid::Template.register_tag('mainchart', Jekyll::RenderMainChartTag)
