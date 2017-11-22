let $Config, editor;


{
    editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        mode: "text/javascript",
        matchBrackets: true,
        autoCloseBrackets: true,
        extraKeys: {
            "Ctrl-Tab": "autocomplete",
            "Ctrl-/": "toggleComment"
        },
        continueComments: "Enter",
    });
    editor.setOption("theme", "cobalt");//"erlang-dark");
    editor.setSize("100%", "25vh");
    editor.on("keyup", function (e, s) {
        $rampage = s;
        if (s.type == "keyup" && !e.state.completionActive && s.keyCode != 13 && s.keyCode !=
            27 && s.keyCode != 32 && s.keyCode != 8 && /^[A-Zа-яА-Яa-z$_]*$/.test(s.key) && s.key
            .length == 1 && !s.ctrlKey && !s.altKey) {
            CodeMirror.showHint(e, null, {
                completeSingle: false
            });
            // CodeMirror.commands.autocomplete(e, null, {completeSingle: false});
        }
    });
}


{
    let canvas = document.getElementsByClassName("canvas")[0];
    $Config = {
        type: 'graphic', //graphic/console/api
        canvas_size: [canvas.clientWidth, canvas.clientHeight + window.innerHeight / 5, false], //[x,y,вместить]
        Debug_Mode: true,
        name: "Интерпретатор JsMobileBasic",
        fullscreen: false
    }
}