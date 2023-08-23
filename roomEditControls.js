var editControls =
`<button id="setAvailable">
    Add to Available Rooms
</button>

<button>
    Add to Share Unavailable Space
</button>

<button>
    Clear
</button>

<script>
var setAvailButton = document.getElementById("setAvailable");
setAvailButton.addEventListener("click", function(event){
   alert(event.target);
});
</script>
`

