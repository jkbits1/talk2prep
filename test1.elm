port module testInterop exposing (..)

import Html exposing (..)
import Html.App as Html
import Html.Events exposing (onClick)

main = Html.beginnerProgram 
  {
    model = model
  , view = view
  , update = update
  , subscriptions = subscriptions
  }

type alias Model = Int

model : Model
model = Int
--  {
--    data : String,
--    dataProcessed : List String 
--  }

type Msg = Inc

update : Msg -> Model -> Model
update msg n =
  case msg of 
    Inc -> n + 1
    
view : Model -> Html Msg
view n = div [] 
  [ button [onClick Inc]
      [ text "+"]
  ,   text <| toString n
  ]