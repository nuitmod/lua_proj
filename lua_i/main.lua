local ii="<h6>lua file content iiii 999</h6>"
--local ind=require '/index.html'
--local template = require "resty.template"
--ngx.print(ii)
--local dat=require("dat")
--dat.a()

ngx.say(ii)
--print(ii)

function ww()
  local dat="<h5>fn dat fri !!!</h5>"
  ngx.say(dat)
end

ww()

local args=ngx.req.get_uri_args()
local search = args.search
 ngx.say(search)
