## Quotation tag will render anything in the tag with small caps
## Usage {% Quotation Your text string here} will render a span
## YOUR TEXT STRING HERE (sort of, you know, small caps) if you are using the tufte.css file

module Jekyll
  class RenderQuotationTag < Liquid::Tag

require "shellwords"

    def initialize(tag_name, text, tokens)
      super
      @text = text.shellsplit
    end


    def render(context)
      "<span class='quotation'>#{@text[0]}</span> "
    end
  end
end

Liquid::Template.register_tag('quotation', Jekyll::RenderQuotationTag)